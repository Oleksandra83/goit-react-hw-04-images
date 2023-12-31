import React, { useState } from "react";
import {
	Header,
	SearchForm,
	SearchFormBtn,
	SearchFormInput,
} from "./Searchbar.styled";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { toast } from "react-toastify";
import { notifyOptions } from "notify/notify";
import PropTypes from "prop-types";

export const Searchbar = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	const handleChange = ({target: {value}}) => {
		setValue(value.toLowerCase());
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (value.trim() === '') {
			return toast.info('Please enter key words for search', notifyOptions);
		}
		onSubmit(value);
		setValue('');
	};

		return (
			<Header>
				<SearchForm onSubmit={handleSubmit}>
					<SearchFormBtn >
						<HiMagnifyingGlass size="24" />
					</SearchFormBtn>
					<SearchFormInput
						type="text"
						autocomplete="off"
						autoFocus
						placeholder="Search images and photos"
						value={value}
						onChange={handleChange}
					/>
				</SearchForm>
			</Header>
		);
	}

Searchbar.propType = {
	onSubmit: PropTypes.func.isRequired,
};
