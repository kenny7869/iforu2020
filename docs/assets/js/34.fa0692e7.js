(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{365:function(s,t,e){"use strict";e.r(t);var a=e(17),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"syslog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syslog"}},[s._v("#")]),s._v(" syslog")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsblk")]),s._v("\nmkfs.ext4 /dev/sdb\n")])])]),e("p",[e("code",[s._v("/etc/fstab")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/sdb                         /var/log            ext4    defaults    1 2"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\nsystemctl daemon-reload\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("restorecon -Rv /var/log\n/sbin/reboot\n")])])]),e("h2",{attrs:{id:"server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[s._v("#")]),s._v(" server")]),s._v(" "),e("h2",{attrs:{id:"client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[s._v("#")]),s._v(" client")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/rsyslog.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n\naction(type="omfwd"\nqueue.filename="fwdRule1"\nqueue.maxdiskspace="1g"\nqueue.saveonshutdown="on"\nqueue.type="LinkedList"\naction.resumeRetryCount="-1"\nTarget="192.168.30.2" Port="514" Protocol="tcp")\nEOF')]),s._v("\nsystemctl restart rsyslog.service\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);