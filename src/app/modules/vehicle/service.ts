import { Prisma, PrismaClient } from '@prisma/client';
import {
  IFilters,
  IPaginationOptions,
} from '../../../interfaces/paginationOptions';
import { IGenericResponse } from '../../../interfaces/common';
import { ÏVehicles, vehicleProfile_fields_constant } from './interface';
import { paginationHelpers } from '../../../helpers/paginationHelpers';

const prisma = new PrismaClient();

const createVehicleService = async (payload: any) => {
  const result = await prisma.vehicle.create({
    data: payload,
  });
  return result;
};

const getAllVehicleService = async (
  paginatinOptions: IPaginationOptions,
  filterOptions: IFilters
): Promise<IGenericResponse<any>> =>
  // : Promise<IGenericResponse<IUserResponse[]>> =>
  {
    const { searchTerm, ...filterData } = filterOptions;
    const { limit, page, skip } =
      paginationHelpers.calculatePagination(paginatinOptions);
    const andConditions = [];
    //searching code
    if (searchTerm) {
      andConditions.push({
        OR: vehicleProfile_fields_constant.map(field => {
          return {
            [field]: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          };
        }),
      });
    }

    //filtering code
    if (Object.keys(filterData).length > 0) {
      andConditions.push({
        AND: Object.keys(filterData).map(key => ({
          [key]: {
            equals: (filterData as any)[key],
          },
        })),
      });
    }

    const whereCondition: Prisma.VehicleWhereInput =
      andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma.vehicle.findMany({
      where: whereCondition,
      skip,
      take: limit,
      orderBy:
        paginatinOptions.sortBy && paginatinOptions.sortOrder
          ? {
              [paginatinOptions.sortBy]: paginatinOptions.sortOrder,
            }
          : { createAt: 'asc' },
      // select: {

      // },
    });
    const total = await prisma.vehicle.count();

    return {
      meta: {
        limit,
        page,
        total,
      },
      data: result,
    };
  };

const getSingleVehicleService = async (id: string) => {
  const result = await prisma.vehicle.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateVehicleService = async (data: any, id: string) => {
  const result = await prisma.vehicle.update({
    where: {
      id: id,
    },
    data,
  });
  return result;
};

const DeletevehicleService = async (id: string) => {
  const result = await prisma.vehicle.delete({
    where: {
      id,
    },
  });
  return result;
};

export const vehicleService = {
  createVehicleService,
  getSingleVehicleService,
  getAllVehicleService,
  updateVehicleService,
  DeletevehicleService,
};