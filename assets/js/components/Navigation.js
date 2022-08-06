export default function Navigation(){
  return (
    <div className="bg-cyan-600 p-12 text-white">
      <ul className="flex gap-3">
        <li ><a href='/'>Home</a></li>
        <li><a href='/articles'>Articles</a></li>
        <li className='btn'><a href='/articles/new'>Add new</a></li>
      </ul>
    </div>
  )
}
