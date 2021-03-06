console.log('Hello PWA')

//////////////////////////////////////////////////////////////////////////////
//		加載工作
//////////////////////////////////////////////////////////////////////////////
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

if (workbox) {
	console.log(`加載成功 `)
} else {
	console.log(`工作未加載 `)
}

//////////////////////////////////////////////////////////////////////////////
//		設置級別
//////////////////////////////////////////////////////////////////////////////
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)
//		註冊
workbox.routing.registerRoute(
	new RegExp('.*\.js'),
	workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
	new RegExp('index.html'),
	workbox.strategies.cacheFirst()
)


//	預緩存url
// 可填寫 
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
  },
  {
    "url": "sw.js",
  },
  {
    "url": "main/aframe.min.js",
  }
])
