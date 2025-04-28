
export const Appbar = () => {
    return (
      <div className="h-16 w-full px-8 flex items-center justify-between 
      backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-2xl">
        
        <div className="text-3xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md">
          PayTM App
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-lg font-medium text-gray-700">
            Hello
          </div>
  
          <div className="relative">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
            flex items-center justify-center shadow-lg">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl">
                U
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></div>
          </div>
        </div>
  
      </div>
    );
  }
  