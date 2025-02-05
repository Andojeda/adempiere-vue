<!--
 ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
 Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
 Contributor(s): Leonel Matos lmatos@erpya.com www.erpya.com
 Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com www.erpya.com
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https:www.gnu.org/licenses/>.
-->
<template>
  <div v-if="!isEmptyValue(getProcessLog)" key="with-process" class="app-container">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in getProcessLog"
        :key="index"
        :timestamp="translateDate(activity.lastRun)"
        placement="top"
        type="primary"
        size="large"
        :color="checkStatus(activity).color"
      >
        <el-card>
          <div slot="header" class="clearfix">
            <span><b>{{ activity.name }}</b></span>
            <div class="actions">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  {{ $t('components.contextMenuActions') }}<i class="el-icon-arrow-down el-icon--right" />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-if="activity.isReport" :command="{ ...activity, command: 'seeReport' }">
                    {{ $t('views.seeReport') }}
                  </el-dropdown-item>
                  <el-dropdown-item :command="{ ...activity, command: 'zoomIn' }">
                    {{ $t('table.ProcessActivity.zoomIn') }}
                  </el-dropdown-item>
                  <!-- TODO: add more actions -->
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <el-form label-position="top">
            <el-form-item v-if="activity.description" :label="generateTitle('Description')">
              <span><b>{{ activity.description }}</b></span>
              <span v-if="activity.isReport">{{ activity.output.description }}</span>
            </el-form-item>
            <el-form-item :label="generateTitle('Status')">
              <!-- show only when it is error -->
              <el-popover
                v-if="activity.isError"
                :key="index + 'is-error'"
                placement="right"
                width="300"
                trigger="click"
              >
                <div v-if="!isEmptyValue(activity.summary)">
                  {{ activity.message }}
                </div>
                <div v-else>
                  {{ $t('route.withoutLog') }}
                </div>
                <el-tag slot="reference" :type="checkStatus(activity).type">
                  {{ checkStatus(activity).text }}
                </el-tag>
              </el-popover>
              <!-- show only when bring logs -->
              <el-popover
                v-else-if="activity.panelType === 'process'"
                :key="index + 'is-summary'"
                placement="right"
                width="300"
                trigger="click"
              >
                <b>{{ $t('table.ProcessActivity.Logs') }}</b><br>
                <ul>
                  <li @click="handleCommand({ ...activity, command: 'zoomIn' })"> {{ activity.summary }} </li>
                  <el-scrollbar wrap-class="popover-scroll">
                    <li v-for="(logItem, key) in activity.logsList" :key="key" @click="zoomIn(activity)">
                      {{ logItem.log }}
                    </li>
                  </el-scrollbar>
                </ul>
                <el-tag slot="reference" :type="checkStatus(activity).type">
                  {{ checkStatus(activity).text }}
                </el-tag>
              </el-popover>
              <!-- show only when bring output -->
              <el-popover
                v-else-if="activity.panelType === 'report'"
                :key="index + 'is-output'"
                placement="right"
                width="300"
                trigger="click"
              >
                <div v-if="!isEmptyValue(activity.summary)">
                  <span> {{ $t('table.ProcessActivity.Output') }} </span><br>
                  <span>{{ $t('table.ProcessActivity.Name') }}: {{ activity.output.name }}</span><br>
                  <span>{{ $t('table.ProcessActivity.Description') }}: {{ activity.output.description }}</span><br>
                  <span>{{ $t('table.ProcessActivity.FileName') }}: {{ activity.output.fileName }}</span><br>
                  <a type="text" :href="activity.url" :download="activity.download">
                    {{ $t('components.contextMenuDownload') }} <i class="el-icon-download" />
                  </a>
                </div>
                <div v-else>
                  {{ $t('route.withoutLog') }}
                </div>
                <el-tag slot="reference" :type="checkStatus(activity).type">
                  {{ checkStatus(activity).text }} {{ activity.type }}
                </el-tag>
              </el-popover>
              <el-popover
                v-else
                :key="index + 'is-other'"
                placement="top-start"
                :title="$t('table.ProcessActivity.Logs')"
                width="200"
                trigger="click"
                :content="activity.summary"
              >
                <el-tag slot="reference" :type="checkStatus(activity).type">
                  {{ checkStatus(activity).text }}
                </el-tag>
              </el-popover>
            </el-form-item>
          </el-form>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
  <div v-else key="without-process">
    <h1 class="text-center">{{ $t('views.noProcess') }}</h1>
  </div>
</template>

<script>
import MixinProcessActivity from './index.vue'

export default {
  name: 'ProcessActivity',
  mixins: [
    MixinProcessActivity
  ]
}
</script>

<style lang="scss" scoped src="./processActivityStyle.scss">
</style>
<style>
  .popover-scroll {
    max-height: 200px !important;
  }
  .el-popper[x-placement^=right] {
    margin-left: 12px;
    padding: 20px;
  }
</style>
