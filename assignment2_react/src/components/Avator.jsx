function Avator(){
    return(
        <div className="flex items-center justify-start">
        <div>
          <img
            className="h-20 w-20 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h2 className="text-xl font-semibold">Shariq Raja</h2>
          <h2 className="text-lg text-gray-600">Front-End Developer</h2>
        </div>
      </div>
      
    )
}

export default Avator;