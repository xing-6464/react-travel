export const FETCH_RECOMMEND_PRODUCTS_START =
    'FETCH_RECOMMEND_PRODUCTS_START' // 正在调用推荐信息API
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  'FETCH_RECOMMEND_PRODUCTS_SUCCESS' // 推荐信息API调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL =
    'FETCH_RECOMMEND_PRODUCTS_FAIL' // 推荐信息调用失败

interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any;
}

interface FetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: any;
}

export type RecommendProductsAction = 
  | FetchRecommendProductsStartAction
  | FetchRecommendProductsSuccessAction
  | FetchRecommendProductsFailAction

export const fetchRecommendProductsStartActionCreator = (): FetchRecommendProductsStartAction => {
  return {
    type: 'FETCH_RECOMMEND_PRODUCTS_START'
  }
}

export const fetchRecommendProductsSuccessActionCreator = (data): FetchRecommendProductsSuccessAction => {
  return {
    type: 'FETCH_RECOMMEND_PRODUCTS_SUCCESS',
    payload: data
  }
}

export const fetchRecommendProductsFailActionCreator = (error): FetchRecommendProductsFailAction => {
  return {
    type: 'FETCH_RECOMMEND_PRODUCTS_FAIL',
    payload: error
  }
}
