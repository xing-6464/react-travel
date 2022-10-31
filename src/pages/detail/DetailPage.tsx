import React from 'react'
import { useParams } from 'react-router-dom'

type MatchParams = {
  touristRouteId: string,
}

export const DetailPage: React.FC = () => {
  let params = useParams<MatchParams>()

  return <h1>旅游路线, 路线: { params.touristRouteId }</h1>
}
