import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Sidebar from './Sidebar'

import styled from 'styled-components'

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Sidebar />

    </div>
  )
}
