import React, { useState, useEffect } from "react";
import NeedlemanSearch from "needleman-js";
import "./style.css";

const SearchBox = ({ ariaLabel, placeholder, pool, searchConfig, onSelect }) => {
	const [options, setOptions] = useState({});
	const [show, setShow] = useState(false)
	const [value, setValue] = useState('')

	const aria = ariaLabel || "Search through dataset";
	const placeholderText = placeholder || "Search...";

	const needleman = new NeedlemanSearch(searchConfig);

	const search = (value) => {
		const newOptions = needleman.search(value, pool);
		setOptions(newOptions);
	};
	const select = (selectedVal) => {
		if (value !== selectedVal) {
			onSelect(selectedVal)
			setValue(selectedVal)
		}
		
		setShow(false)
	}

	useEffect(() => {
		if (value) {
			search(value)
		}
	}, [value])

	return (
		<div className="search-box">
			<input
				type="search"
				placeholder={placeholderText}
				aria-label={aria}
				value={value}
				onClick={() => setShow(true)}
				onChange={({target}) => setValue(target.value)}
			/>
			{Object.keys(options).length > 0 &&
			<ul className={`search-box-results ${show ? 'active':''}`}>
			{Object.keys(options)
					.sort()
					.map((score) => {
						return options[score].map((opt) => {
							return (
								<li key={opt} value={opt} onClick={() => {
									console.log(opt)
									select(opt)
								}}>
									{opt}
								</li>
							);
						})
						
					})}
			</ul>
}
		</div>
	);
};

export default SearchBox;
