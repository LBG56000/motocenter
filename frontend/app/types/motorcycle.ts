import type { IBrand } from './brand'

export interface IMotorcycle {
  id: string
  model: string
  brand: IBrand
  createdAt: string
  engine_size: number
  horsePower: number
  soundLink?: string
  is_public?: boolean
  time_0_100?: number
  time_100_200?: number
  time_200_300?: number
  speedMax?: number
  numberOfComparison?: number
  withAllFiled?: boolean
  year: number
  price: number
}
