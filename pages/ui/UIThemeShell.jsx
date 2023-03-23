import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import UIBody from './UIBody';
import { useSelector } from 'react-redux';

const UIThemeShell = () => {

	const dark_mode = useSelector(state => state.app.settings.dark_mode);

	const base_theme_light = createTheme({
			palette: {
			  type: 'dark',
			  primary: {
				main: '#3f8db5',
			  },
			  secondary: {
				main: '#ffe335',
				dark: '#ffb000',
			  },
			  background: {
				default: '#213948',
				paper: '#003c52',
			  },
		},
		
	});

	const base_theme_dark = createTheme({
		palette: {
			type: 'light',
			primary: {
			  main: '#3f8db5',
			},
			secondary: {
			  main: '#ffe335',
			  dark: '#ffb000',
			},
			background: {
			  default: '#5da0c7',
			  paper: '#81b2c5',
			},
			text: {
			  primary: 'rgba(255,255,255,0.89)',
			  secondary: 'rgba(255,233,87,0.54)',
			  disabled: 'rgba(255,255,255,0.38)',
			  hint: 'rgba(255,255,255,0.38)',
			},
		  }
	});



	return (
		<ThemeProvider theme={dark_mode ? base_theme_light : base_theme_dark}>
			<UIBody/>
		</ThemeProvider>
	)
}

export default UIThemeShell