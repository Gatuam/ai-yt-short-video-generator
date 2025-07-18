
import { auth } from "@/app/auth"
import { redirect } from "next/navigation"
import MainComponents from "@/components/global/_DashboardComponents/MainComponents/MainComponents"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/") 
  }

  return (
    <div className="w-full bg-[#0a0a0a]">
      <MainComponents />
    </div>
  )
}
