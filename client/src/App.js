import './App.css'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
} from '@apollo/client'

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: `${window.location.protocol}//${window.location.hostname}:1338/graphql`,
		})
	})

	return (
		<ApolloProvider client={client}>
			<div className="App">
				<DisplayData />
			</div>
		</ApolloProvider>
	)
}

export default App
