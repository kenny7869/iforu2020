(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{249:function(t,a,l){t.exports=l.p+"assets/img/firewall_01.582cabc0.png"},250:function(t,a,l){t.exports=l.p+"assets/img/firewall_02.7095e18c.png"},251:function(t,a,l){t.exports=l.p+"assets/img/firewall_03.4613a18e.png"},252:function(t,a,l){t.exports=l.p+"assets/img/firewall_04.0db75297.png"},253:function(t,a,l){t.exports=l.p+"assets/img/firewall_05.e53074db.png"},254:function(t,a,l){t.exports=l.p+"assets/img/firewall_06.4d1db5e9.png"},255:function(t,a,l){t.exports=l.p+"assets/img/firewall_07.a4a43547.png"},256:function(t,a,l){t.exports=l.p+"assets/img/firewall_08.df265601.png"},257:function(t,a,l){t.exports=l.p+"assets/img/firewall_09.e266e47b.png"},258:function(t,a,l){t.exports=l.p+"assets/img/firewall_10.7d636fc3.png"},259:function(t,a,l){t.exports=l.p+"assets/img/firewall_11.e900658c.png"},260:function(t,a,l){t.exports=l.p+"assets/img/firewall_12.83d0d455.png"},261:function(t,a,l){t.exports=l.p+"assets/img/firewall_13.718bb956.png"},262:function(t,a,l){t.exports=l.p+"assets/img/firewall_14.0a3efdac.png"},263:function(t,a,l){t.exports=l.p+"assets/img/firewall_15.55d858ef.png"},264:function(t,a,l){t.exports=l.p+"assets/img/firewall_16.9109e684.png"},348:function(t,a,l){"use strict";l.r(a);var s=l(17),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"防火牆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火牆"}},[t._v("#")]),t._v(" 防火牆")]),t._v(" "),s("p",[t._v("假定需設定 CHTD DSIS 介接，由 DSIS sftp 連到我方 admin-1 主機。")]),t._v(" "),s("ul",[s("li",[t._v("DSIS Source IP: 203.75.129.253")]),t._v(" "),s("li",[t._v("SFTP Port: 22")])]),t._v(" "),s("h2",{attrs:{id:"設定一外部-ip-轉導至-admin-1，提供-dsis-連入連線。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定一外部-ip-轉導至-admin-1，提供-dsis-連入連線。"}},[t._v("#")]),t._v(" 設定一外部 IP 轉導至 admin-1，提供 DSIS 連入連線。")]),t._v(" "),s("p",[s("img",{attrs:{src:l(249),alt:"firewall_01",title:"firewall_01"}}),t._v(" "),s("img",{attrs:{src:l(250),alt:"firewall_02",title:"firewall_02"}}),t._v(" "),s("img",{attrs:{src:l(251),alt:"firewall_03",title:"firewall_03"}}),t._v(" "),s("img",{attrs:{src:l(252),alt:"firewall_04",title:"firewall_04"}}),t._v(" "),s("img",{attrs:{src:l(253),alt:"firewall_05",title:"firewall_05"}}),t._v(" "),s("img",{attrs:{src:l(254),alt:"firewall_06",title:"firewall_06"}})]),t._v(" "),s("h2",{attrs:{id:"開通-dsis-連入防火牆設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#開通-dsis-連入防火牆設定"}},[t._v("#")]),t._v(" 開通 DSIS 連入防火牆設定")]),t._v(" "),s("p",[s("img",{attrs:{src:l(255),alt:"firewall_07",title:"firewall_07"}}),t._v(" "),s("img",{attrs:{src:l(256),alt:"firewall_08",title:"firewall_08"}}),t._v(" "),s("img",{attrs:{src:l(257),alt:"firewall_09",title:"firewall_09"}}),t._v(" "),s("img",{attrs:{src:l(258),alt:"firewall_10",title:"firewall_10"}}),t._v(" "),s("img",{attrs:{src:l(259),alt:"firewall_11",title:"firewall_11"}}),t._v(" "),s("img",{attrs:{src:l(260),alt:"firewall_12",title:"firewall_12"}}),t._v(" "),s("img",{attrs:{src:l(261),alt:"firewall_13",title:"firewall_13"}}),t._v(" "),s("img",{attrs:{src:l(262),alt:"firewall_14",title:"firewall_14"}}),t._v(" "),s("img",{attrs:{src:l(263),alt:"firewall_15",title:"firewall_15"}}),t._v(" "),s("img",{attrs:{src:l(264),alt:"firewall_16",title:"firewall_16"}})]),t._v(" "),s("h2",{attrs:{id:"設定主機防火牆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定主機防火牆"}},[t._v("#")]),t._v(" 設定主機防火牆")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("firewall-cmd --zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-rich-rule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'rule family="ipv4" source address="203.75.129.253/32" port port="22" protocol="tcp" accept\'')]),t._v(" --permanent\nfirewall-cmd --reload\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);