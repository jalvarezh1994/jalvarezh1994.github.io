(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1a20"],{"7aee":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page bg-blue full-height"},[n("SideMenu"),n("div",{staticClass:"header-spacer"}),n("div",{staticClass:"wrapper animated fadeInRight"},t._l(t.content,function(e){return n("div",[t.isText(e)?n("div",[n("TextContent",{attrs:{text:e.text}})],1):t._e(),t.isImage(e)?n("div",[n("ImageContent",{attrs:{imageId:e.imageId}})],1):t._e(),t.isVideo(e)?n("div",[n("VideoContent",{attrs:{videoId:e.videoId}})],1):t._e(),t.isAnimation(e)?n("div",[n("AnimationContent",{attrs:{animationId:e.animationId}})],1):t._e(),t.isInteractive(e)?n("div",[n("div",[t._v("soy interactivo")])]):t._e()])}),0),n("footer",{staticClass:"footer"})],1)},o=[],s=(n("7514"),n("cadf"),n("551c"),n("f751"),n("097d"),{name:"LessonContent",data:function(){return{}},computed:{content:function(){var t=this,e=this.$store.getters.getTopics.find(function(e){return e.topicId===t.$store.getters.getTopicId}),n=e.lessons.find(function(e){return e.lessonId===t.$store.getters.getLessonId}),i=n.pages.find(function(e){return e.pageId===t.$store.getters.getPageId}),o=i.content;return o}},methods:{isText:function(t){return"text"===t.contentType},isImage:function(t){return"image"===t.contentType},isVideo:function(t){return"video"===t.contentType},isAnimation:function(t){return"animation"===t.contentType},isInteractive:function(t){return"interactive"===t.contentType}}}),a=s,r=n("2877"),d=Object(r["a"])(a,i,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e1a20.ba49302f.js.map