import Nav from './Navigation'


export default function PageWrapper({children}) {
  return (
    <>
      <Nav />
      <div className=" mt-6 flex flex-col items-center ">
      <div className="flex h-auto  w-3/4 flex-col gap-8 space-y-8 relative ">
         {children}
      </div>
       
      </div>
    </>
  )
}
