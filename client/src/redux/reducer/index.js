import * as actionTypes from '../action-types/'

var q = 1

const initialState = {
  Shoes: [],
  Filters: [],
  backupFilters: [],
  Categories: [],
  Brands: [],
  Colors: [],
  Genders: [],
  Questions: [],
  Qdelete: [],
  ShoesDetails: {},
  Carrito: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SHOES:
      return {
        ...state,
        Shoes: action.payload,
        Filters: action.payload,
      }
    case actionTypes.GET_ALL_BRANDS:
      return {
        ...state,
        Brands: action.payload,
      }
    case actionTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        Categories: action.payload,
      }
    case actionTypes.GET_ALL_COLORS:
      return {
        ...state,
        Colors: action.payload,
      }
    case actionTypes.GET_ALL_GENDERS:
      return {
        ...state,
        Genders: action.payload,
      }
    case actionTypes.GET_FILTERS_CATEGORY:
      const filterCategories = state.Shoes.filter(product => {
        if (action.payload === 'All') return product
        if (action.payload.toLowerCase() === product.category.toLowerCase()) return product
        return false
      })

      return {
        ...state,
        Filters: filterCategories,
        backupFilters: filterCategories,
      }
    case actionTypes.GET_FILTERS_BRANDS:
      const filterBrands = state.Shoes.filter(product => {
        if (action.payload === 'All') return product
        if (action.payload.toLowerCase() === product.brand_name.toLowerCase()) return product
        return false
      })

      return {
        ...state,
        Filters: filterBrands,
        backupFilters: filterBrands,
      }
    case actionTypes.UPDATE_FILTERS:
      const { brands, genders, prices, colors } = action.payload

      const productsBrands = state.backupFilters.filter(product => {
        if (!brands.length) return product
        if (typeof brands === 'string') return brands.toLowerCase() === product.brand_name.toLowerCase()
        if (Array.isArray(brands)) return brands.includes(product.brand_name)
        return false
      })

      const productsGenders = productsBrands.filter(product => {
        if (!genders.length) return product
        if (typeof genders === 'string') return product.genders.includes(genders)
        if (Array.isArray(genders)) {
          return product.genders.find(value => genders.includes(value))
        }
        return false
      })

      const productsPrices = productsGenders.filter(product => {
        const { min, max } = prices
        return product.price >= min && product.price <= max
      })

      const productsColors = productsPrices.filter(product => {
        if (!colors.length) return product
        if (typeof colors === 'string') return product.colors.includes(colors)
        if (Array.isArray(colors)) return colors.includes(product.color)
        return false
      })

      return {
        ...state,
        Filters: [...productsColors],
      }
    case actionTypes.GET_FILTERS_SEARCHBAR:
      const filterSearch = state.Shoes.filter(product => {
        let name = product.name.toLowerCase()
        if (!action.payload.length) return product
        if (name.includes(action.payload.toLowerCase())) return product
        return false
      })

      return {
        ...state,
        Filters: filterSearch,
        backupFilters: filterSearch,
      }
    case actionTypes.GET_QUESTIONS:
      return {
        ...state,
        Questions: action.payload,
      }
    case actionTypes.DELETE_QUESTIONS:
      return {
        ...state,
        Qdelete: q++,
      }
    case actionTypes.CREATE_QUESTION:
      return {
        ...state,
        Qdelete: q++,
      }
    case actionTypes.GET_SHOES_DETAILS:
      return {
        ...state,
        ShoesDetails: action.payload,
      }
    case actionTypes.CLEAN_DETAIL:
      return {
        ...state,
        ShoesDetails: {},
      }
    case actionTypes.GET_ADD_CARRITO:
      let existProduct = state.Carrito.filter(p => p.id === action.payload.id)
      if (!existProduct.length) state.Carrito = [...state.Carrito, action.payload]
      return {
        ...state,
      }

    case actionTypes.DELETE_PRODUCT_CARRITO:
      return {
        ...state,
        Carrito: state.Carrito.filter(product => product.id !== action.payload),
      }
    case actionTypes.CHANGE_AMOUNT_PRODUCT:
      return {
        ...state,
        Carrito: state.Carrito.map(product => {
          if (product.id === action.payload.id) product.amount = action.payload.amount
          return product
        }),
      }
    case actionTypes.CREATE_SHOES:
      return{
        ...state,
      }
    case actionTypes.CREATE_CATEGORIES:
        return{
          ...state,
        }
    case actionTypes.CREATE_COLORS:
        return{
          ...state,
        }
    case actionTypes.CREATE_BRANDS:
        return{
          ...state,
        }
    case actionTypes.CREATE_GENDERS:
        return{
          ...state,
        }
    default:
      return state
  }
}

export default rootReducer
