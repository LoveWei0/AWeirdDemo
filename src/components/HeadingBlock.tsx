import React from 'react'

interface PropType {
  fullWidth: boolean
  smallIcon: boolean
  step: number
  bg: string
  img: string
  header: string
  desc: string
}

export default function HeadingBlock({
  fullWidth = false,
  smallIcon = false,
  step,
  bg,
  img,
  header,
  desc,
}: PropType) {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={bg}
          alt="bg"
          className="w-full md:max-w-screen-xl rounded-lg"
        />
      </div>
      <div className="flex justify-center">
        <div
          className={`md:flex w-5/6 ${
            fullWidth ? 'w-full' : 'md:max-w-screen-xl'
          } py-0 md:px-10 my-5 gap-10 ${step === 2 ? 'justify-center' : ''}`}
        >
          <div className="hidden md:flex justify-center flex-shrink-0 items-center md:w-48">
            <img
              src={img}
              alt="img"
              style={{
                width: smallIcon ? '155px' : '130px',
                height: smallIcon ? '155px' : '130px',
                marginTop: smallIcon ? '-10px' : '0',
              }}
            />
          </div>
          {step === 1 && (
            <div className="pt-2">
              <div className="text-3xl font-bold main-color">{header}</div>
              <div className="pt-2">{desc}</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
