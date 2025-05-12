import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      WS_URL +
        "?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMTMzNmZkZC0zZDJiLTQyYzItOTIwMy1kM2MyMDM0NmE2MDUiLCJpYXQiOjE3NDY5NTcxMzh9.8fwDcrpDqM96MX-3W2V3xMV6Oh9tnAT58iq3YFylaZM"
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}
