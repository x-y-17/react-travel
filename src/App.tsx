import React from "react";
import styles from "./App.module.css";
import "antd/dist/reset.css";
import { Header,Footer } from "./components";

function App() {
	
	return (
		<div className={styles.App}>
			<Header />
            <Footer />
		</div>
	);
}

export default App;
