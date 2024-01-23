import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "components";
import { TaskProvider } from "contexts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoreNote",
  description:
    " aplicativo da Web que permita aos usuários criar e gerenciar suas listas de tarefas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <TaskProvider>
          <Header />
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
