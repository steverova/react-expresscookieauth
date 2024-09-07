import { Button } from "@/components/ui/button"
import cat from "../assets/svg/cat.svg"

import { useNavigate } from "react-router-dom"
import { MoveLeft } from "lucide-react"

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='relative h-screen w-screen flex flex-col'>
      <div className='flex-grow flex flex-col items-center justify-center p-12'>
        <img
          style={{ objectFit: "fill", width: "70%" }}
          src={cat}
          alt='Unauthorized'
        />
        <div className='flex flex-col justify-center items-center'>
          <p className='sm:text-5xl lg:text-8xl font-bold text-[#ff6584]  '>
            404
          </p>
          <p className='text-2xl'>Ooops... Page not found</p>

          <Button
            className='my-6'
            onClick={() => navigate("/")}
            type='button'
            variant='outline'>
            <MoveLeft className='h-4 w-4 me-3' />
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
