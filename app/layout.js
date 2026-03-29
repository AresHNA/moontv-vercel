export const metadata = {
  title: "MoonTV 影视",
  description: "免费影视站"
}

export default function Layout({ children }) {
  return (
    <html lang="zh-CN">
      <body style="margin:0; background:#111; color:#fff; font-family:system-ui">
        {children}
      </body>
    </html>
  )
}
