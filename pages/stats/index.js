import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../compoents/header";
import styles from "../../styles/Stats.module.css"

export default function Stats() {
	// component state to store Providers data
	const [providers, setProviders] = useState([])

	useEffect(() => {
		// Calling get API to populate Provider state on first render 
		axios.get("http://localhost:8000/api/providers")
			.then(response => {
				console.log(response)
				setProviders(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return <>
		<Header />
		<table className={styles.tableContainer}>
			<tbody>
				<tr>
					<th>Id</th>
					<th>Provider</th>
					<th>Status</th>
					<th>Email Count</th>
				</tr>
				{providers && providers.length > 0 && providers.map(provider => {
					return <tr key={provider.id}>
						<td>{provider.id}</td>
						<td>{provider.name}</td>
						<td>{provider.status.toString()}</td>
						<td>{provider.emails_count}</td>
					</tr>
				})}
			</tbody>
		</table>
	</>


}

