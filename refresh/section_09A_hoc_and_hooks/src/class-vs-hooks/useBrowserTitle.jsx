import { useEffect } from "react";

export default function useBrowserTitle(title) {
	useEffect(() => {
		document.title = title;
		//   return () => {
		//     componentWillUnmopunt
		//   }
	});

	return <div></div>;
}
