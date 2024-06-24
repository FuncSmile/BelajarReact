const AdminPages = () => {
    const user = localStorage.getItem('email')
    return (
        <>
          <nav className="flex justify-end h-14 bg-blue-600 items-center px-8">
            <h1 className="text-white text-lg font-bold">{user}</h1>
            </nav>  
        </>
    )
}

export default AdminPages