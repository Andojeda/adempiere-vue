(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{240:function(e,s,a){"use strict";a.r(s);var r=a(0),i=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Permite configurar el acceso que tendra cada rol a un registro o una vista en específico a partir de los siguientes parámetros:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/components/record-access/ad-zk-window-record-access.png"),alt:"Acceso a Registro Versión de Escritorio ZK",width:"800px"}}),e._v(" "),e._m(3),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/components/record-access/ad-vue-window-record-access.png"),alt:"Acceso a Registro ADempiere-Vue de Escritorio",width:"800px"}}),e._v(" "),a("p",[e._v('Al usuar esta configuración por registros se esta personalizando la visualización y el acceso que tendra cada rol en ADempiere,donde se puede activar la visualización de un registros, bloquear o simplemente excluir, cuando el rol se encuentre en el apartado "Roles Disponibles" indicaría que no tiene alguna configurción sobre ese registro, si se desea activar alguna configuración ya sea de activar o bloquear, se tendría que pasar el rol al apartado "Roles Configurado" y aplicar la opción que se desea con ese rol sobre ese registro en específico.')]),e._v(" "),a("p",[e._v('Cabe destacar, que este acción en ADempiere aplica solo registros por registro y por rol; un caso práctico para las funciones del "Acceso a Registro" es el siguiente:')]),e._v(" "),a("p",[e._v("Se requiere dar acceso a dos tipos de documentos uno lectura y escritura, otro solo lectura y bloquear la vista de otro tipo de documento")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Esta acción se ubica aquellas ventanas que tengan en el menú de acciones")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/components/record-access/ad-vue-location-record-access.png"),alt:"Acceso a Registro ADempiere-Vue Escritorio",width:"800px"}}),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("Sirve para conigurar los accesos y bloqueos de un rol en un registro en específico")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("En la versión escritorió este componente se utiliza de la siguiente forma:")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("En la versión movil este componente se utiliza de la siguiente forma:")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),a("p",[e._v("Aquí puede ver un "),a("a",{attrs:{href:"https://demo-ui.erpya.com/#/7aa4242a-93c0-42d8-92be-8250002d3e3c/d97027fd-4cd5-445e-8fd8-ef5d3f7959b4/window/147?tabParent=0&tabChild=0&action=43adbe9d-04a7-4cf6-9582-895c1e40da0b&typeAction=recordAccess",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo"),a("OutboundLink")],1)]),e._v(" "),e._m(16),e._v(" "),e._m(17),a("p",[e._v("Los servicios llamados del componente son "),a("br"),e._v(" "),a("a",{attrs:{href:"https://adempiere.github.io/proxy-adempiere-api/guide/default-modules/adempiere-api/user.html#user-service",target:"_blank",rel:"noopener noreferrer"}},[e._v("GET adempiere-api/ui/getRecordAccess"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://adempiere.github.io/proxy-adempiere-api/guide/default-modules/adempiere-api/user.html#user-service",target:"_blank",rel:"noopener noreferrer"}},[e._v("POST adempiere-api/ui/setRecordAccess"),a("OutboundLink")],1)])])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"acceso-a-registros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acceso-a-registros"}},[this._v("#")]),this._v(" Acceso a Registros")])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ul",[a("li",[a("strong",[e._v("Roles Disponibles")]),e._v(": Se encuentran todos los roles creados en ADempiere,que no tienen alguna configuración del registro el cual se encuentra posicionado")]),e._v(" "),a("li",[a("strong",[e._v("Roles Configurados")]),e._v(": Se encuentran los roles los cuales van a tener una configuración de acceso o bloqueo a un registro en específico, estos acceos o\nbloqueos depende de las siguientes opciones:\n"),a("ul",[a("li",[e._v("Bloquear: Al tildar esta opción se bloquea al rol el acceso y la visualización del registro, al tener activo esta opción se hablita la siguiente opción:\n"),a("ul",[a("li",[e._v("Entidades Dependientes: Al tildar esta opción deja activo solo un registros y los demas registros dependientes de esto los bloquea")])])]),e._v(" "),a("li",[e._v("Desbloquear: Al tildar esta pción se habilita o activa la visualización del registros, al tener activo esta opción se hablitan las siguientes opcines:\n"),a("ul",[a("li",[e._v("Solo Lectura: Puede visualizar en modo lectura (No puede editar o crear) los registros que esten asociados al rol")]),e._v(" "),a("li",[e._v("Editable: Puede visualiar en modo lectura y escritura (puede editar o crear)")])])])])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"version-adempiere-zk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-adempiere-zk"}},[this._v("#")]),this._v(" Versión ADempiere-ZK")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"version-adempiere-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-adempiere-vue"}},[this._v("#")]),this._v(" Versión ADempiere-Vue")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[s("p",[this._v('Para el acceso al documento lectura y escritura: Se debe ubicar en ADempiere el tipo de documento, ir a la acción "Acceso a Registro", ubicar el rol y pasar al apartado "Roles Configurados" se tilda la opción "Desbloquear" y "Editable"')])]),this._v(" "),s("li",[s("p",[this._v('Para el acceso al documento solo lectura: Se debe ubicar en ADempiere el tipo de documento ir a la acción "Acceso a Registro", ubicar el rol y pasar al apartado "Roles Configurados" se tilda la opción "Desbloquear" y "Solo Lectura"')])]),this._v(" "),s("li",[s("p",[this._v('Para el bloqueo de un dcumento: Se debe ubicar ADempiere el tipo de documento ir a la acción "Acceso a Registro", ubicar el rol y pasar al apartado "Roles Configurados" se tilda la opción "Bloquear"')])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"¿donde-se-ubica"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿donde-se-ubica"}},[this._v("#")]),this._v(" ¿Dónde se ubica?")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"¿para-que-sirve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿para-que-sirve"}},[this._v("#")]),this._v(" ¿Para qué sirve?")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"funciones-u-observaciones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#funciones-u-observaciones"}},[this._v("#")]),this._v(" Funciones u Observaciones")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("Función: Configuración de roles para dar acceso o bloquear un regitro")]),this._v(" "),s("li",[this._v("Obseración: Solo se aplica por regitros y por roles, es decir que si se desea configurar por uno o ma registros estos deben hacer uno por uno.")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"¿como-se-utiliza-en-la-version-de-escritorio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿como-se-utiliza-en-la-version-de-escritorio"}},[this._v("#")]),this._v(" ¿Cómo se utiliza en la versión de Escritorio?")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[s("p",[this._v('Primero que nada se debe ubiccar el botón menú de acciones, luego tildar la opción "Acceso a Registro"')])]),this._v(" "),s("li",[s("p",[this._v("Al tildar esta opción se desplegará una ventana donde muestra que el listado de roles los cuales se le configurará los accesos o bloqueos del registro en el que se cuentra posicionado.")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"¿como-se-utiliza-en-la-version-movil"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿como-se-utiliza-en-la-version-movil"}},[this._v("#")]),this._v(" ¿Cómo se utiliza en la versión móvil?")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[s("p",[this._v('Primero que nada se debe ubiccar el botón menú de acciones, luego tildar la opción "Acceso a Registro"')])]),this._v(" "),s("li",[s("p",[this._v("Al tildar esta opción se desplegará  una ventana del lado derecho  donde muestra listado de roles los cuales se le configurará los accesos o bloqueos del registro en el que se cuentra posicionado.")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"opciones-para-el-desarrollador"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opciones-para-el-desarrollador"}},[this._v("#")]),this._v(" Opciones para el Desarrollador")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("El diálogo de "),s("strong",[this._v("Acceso a Registros")]),this._v(" se encuentra en la siguiente ruta:")])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("└── src                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Código fuente principal")]),e._v("\n    └── components                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Componentes globales")]),e._v("\n        └── ADempiere               "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Componentes específicos de ADempiere")]),e._v("\n            └── RecordAccess        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Directorio principal de Acceso a Registros")]),e._v("\n\n")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("El llamado al consumo de servicio de  "),s("strong",[this._v("Acceso a Registros")]),this._v(" se encuentra en la siguiente ruta:")])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("└─ src                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Código fuente principal")]),e._v("\n    └─ api                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Servicios globales")]),e._v("\n      └─ ADempiere                "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Servicios específicos de ADempiere")]),e._v("\n            └─ actions            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Acciones")]),e._v("\n                └─ record-access  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Directorio principal de los servicio Acceso a Registros")]),e._v("\n\n")])])])}],!1,null,null,null);s.default=i.exports}}]);