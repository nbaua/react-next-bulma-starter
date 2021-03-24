import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
const AppUpdateContext = React.createContext()

export function useAppContext() {
	return useContext(AppContext)
}

export function updateAppContext() {
	return useContext(AppUpdateContext)
}

export function AppContextProvider({ children }) {
	const [activePage, setActivePage] = useState(1)
	const [lastPage, setLastPage] = useState(1)

	function moveFirst() {
		setActivePage((page) => {
			return 1
		})
	}

	function movePrev() {
		setActivePage((page) => {
			return page === 1 ? 1 : page - 1
		})
	}

	function moveNext() {
		setActivePage((page) => {
			return page === lastPage ? lastPage : page + 1
		})
	}

	function moveLast() {
		setActivePage((page) => {
			return lastPage
		})
	}

	function setLastPageHandler(val) {
		setLastPage(val)
	}

	return (
		<AppContext.Provider value={{ activePage, lastPage }}>
			<AppUpdateContext.Provider value={{ moveFirst, movePrev, moveNext, moveLast, setLastPageHandler }}>{children}</AppUpdateContext.Provider>
		</AppContext.Provider>
	)
}
