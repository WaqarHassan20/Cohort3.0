import TextInput from "@repo/ui/TextInput";

export default function ChatRoom() {

    return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          backgroundColor: '#0a0a0a',
          color: 'white',
          padding: '10px'
        }}>
          
          {/* Chat messages area */}
          <div style={{
            height:"90vh",
            backgroundColor: '#1f2937',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '10px'
          }}>
            Chat room
          </div>
    
          {/* Typing input area */}
          <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
          }}>
            <div style={{borderRadius: '8px',backgroundColor: '#1f2937',padding:"10px",paddingLeft:"60px",paddingRight:"60px",width:'100%', display:"flex", justifyContent:"center",gap:"10px"}}>
            <TextInput placeholder="Type the message" />
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
            }}>
              Send
            </button>
            </div>
          </div>
    
        </div>
      );
}