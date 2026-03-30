export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-sculk-bg">
      {/* Deep Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sculk-bg via-sculk-bg/90 to-black/80"></div>
      
      {/* Sculk Particles / Souls */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-warden-glow animate-sculk-pulse blur-[1px]"></div>
      <div className="absolute top-[50%] left-[80%] w-3 h-3 rounded-full bg-sculk-teal animate-sculk-pulse blur-[2px]" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[80%] left-[30%] w-2 h-2 rounded-full bg-warden-glow animate-sculk-pulse blur-[1px]" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[10%] left-[60%] w-4 h-4 rounded-full bg-sculk-dark-teal animate-sculk-pulse blur-[3px]" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-[70%] left-[90%] w-2 h-2 rounded-full bg-sculk-teal animate-sculk-pulse blur-[1px]" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating Warden Silhouettes/Lights */}
      <div className="absolute w-[200px] h-[300px] top-[40%] left-[-10%] opacity-20 animate-warden-float blur-3xl rounded-full bg-gradient-to-t from-warden-glow to-transparent"></div>
      <div className="absolute w-[150px] h-[250px] top-[10%] right-[-5%] opacity-15 animate-warden-float blur-3xl rounded-full bg-gradient-to-t from-sculk-teal to-transparent" style={{ animationDelay: '-10s' }}></div>
      
      {/* Optional grid pattern or texture to resemble deepslate could be added here */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
}
