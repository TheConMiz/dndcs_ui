import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import UIBody from './UIBody';
import { useSelector } from 'react-redux';

const UIThemeShell = () => {

	const dark_mode = useSelector(state => state.app.settings.dark_mode);

	const base_theme_light = createTheme({
		palette: {
			type: 'light',
			primary: {
				main: '#3f8db5',
			},
			secondary: {
				main: '#f50057',
			},
			background: {
				default: '#ffffff',
				paper: '#fbf6ea',
			},
		},
	});

	const base_theme_dark = createTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#3f8db5',
			},
			secondary: {
				main: '#f50057',
			},
			background: {
				default: '#ffffff',
				paper: '#fbf6ea',
			},
		},
	});

	return (
		<ThemeProvider theme={base_theme_light}>
			<UIBody/>
		</ThemeProvider>
	)
}

export default UIThemeShell