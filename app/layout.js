export const metadata = {
  title: "MoonTV",
  description: "Free TV",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, background: "#111" }}>
        {children}
      </body>
    </html>
  )
}
