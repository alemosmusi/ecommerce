import * as actionTypes from '../action-types/'

var q = 1

const initialState = {
  Shoes: [],
  Filters: [],
  getFilters: {
    category: 'All',
    brand: 'All',
  },
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
        getFilters: {
          ...state.getFilters,
          category: action.payload,
        },
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
        getFilters: {
          ...state.getFilters,
          brand: action.payload,
        },
      }
    case actionTypes.UPDATE_FILTERS:
      const { brands, genders, prices, colors } = action.payload

      const productSelects = state.Shoes.filter(product => {
        const { category, brand } = state.getFilters
        if (category === 'All' && brand === 'All') return product
        if (category === 'All' && product.brand_name.toLowerCase() === brand.toLowerCase()) return product
        if (brand === 'All' && product.category.toLowerCase() === category.toLowerCase()) return product
        if (
          product.category.toLowerCase() === category.toLowerCase() &&
          product.brand_name.toLowerCase() === brand.toLowerCase()
        )
          return product
        return false
      })

      console.log(productSelects)

      const productsBrands = productSelects.filter(product => {
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
      return {
        ...state,
        Carrito: [...state.Carrito, action.payload],
      }

    default:
      return state
  }
}

export default rootReducer