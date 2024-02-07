
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const findLastUser = async (role: string) => {
    if (role === 'driver') {
        const lastItem = await prisma.driver.findMany({
            orderBy: {
                id: 'desc',
            },
            take: 1,
        })
        return lastItem
    }else if(role === 'manager'){

    }

}

const MakeUserId = async (role: string) => {
  const res = await findLastUser(role)
  if(res && res.length === 0){
    const newUserId = 'VMS'+role.charAt(0).toUpperCase()+'-'+new Date().getFullYear() + 1
  }else if(res && res.length > 0) {
    
  }
}

export default MakeUserId