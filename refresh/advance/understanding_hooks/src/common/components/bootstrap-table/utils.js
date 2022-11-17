function createCell(keys, data, setCellProperty) {
	return data.map((obj) => {
		const cellObj = Object.assign({}, obj);
		keys.map((key) => {
			cellObj[key] = {
				className: "",
				value: obj[key],
				isValueShow: true,
				isIconShow: false,
				tooltip: false,
				icon: "",
				color: "",
			};
		});
		setCellProperty(cellObj, obj);
		return cellObj;
	});
}

export default createCell;
