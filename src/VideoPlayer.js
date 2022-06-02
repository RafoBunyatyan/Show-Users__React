// import React, { useRef, memo } from "react";

// export default memo(function VideoPlayer({ src, onPlay, onPause }) {
// 	const videoRef = useRef()

// 	const countRef = useRef(0)
// 	countRef.current++

// 	return (
// 		<div>
// 			<p>Call count is{countRef.current}</p>
// 			<h2>{src.title}</h2>
// 			<video src={src.url} ref={videoRef} />
// 			<button onClick={() => {
// 				videoRef.current.play()
// 				onPlay()
// 			}}>Play</button>
// 			<button onClick={() => {
// 				videoRef.current.pause()
// 				onPause()
// 			}}>Pause</button>
// 		</div>
// 	)
// 	// }, (prevProps, nexrProps) => {

// 	// 	if (prevProps.onPlay !== nexrProps.onPlay) {
// 	// 		return false
// 	// 	}

// 	// 	if (prevProps.onPause !== nexrProps.onPause) {
// 	// 		return false
// 	// 	}

// 	// 	if (prevProps.src.title !== nexrProps.src.title) {
// 	// 		return false
// 	// 	}

// 	// 	if (prevProps.src.url !== nexrProps.src.url) {
// 	// 		return false
// 	// 	}

// 	// 	return true
// })

// //kam senc enq asum, stugum e mout@ avel arjeqner@ chi toxum vor avelana
// // bayc aveli met kam bart baneri hamar ogtagortum enq useMemo