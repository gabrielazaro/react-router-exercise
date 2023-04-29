const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			idElement: {},
			
		},
		actions: {
			selectElement: (element) => {
				setStore({idElement: element})
				console.log(getStore().idElement);
			},
			addElement: () => {
				const store = getStore();
				let newElement = store.idElement
				setStore({favorites: [...store.favorites, newElement]})
				console.log(getStore().favorites);
			},
			deleteElement: (fav) => {
				const store = getStore();
				let listaActualizada = store.favorites.filter((f) => f !== fav )
				setStore({favorites: listaActualizada});
			}
		}
	};
};

export default getState;
