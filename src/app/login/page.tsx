aaaaaaaaaaa import { Clock } from "lucide-react";
import { MagicLinkForm } from "../_components/magic-link-form";

export default function MagicLinkPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-card rounded-2xl mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Agendamento de avaliações
            </h2>
            <p className="text-muted-foreground">
              Insira seu e-mail para receber um link e acessar seu painel de
              agendamento instantaneamente.
            </p>
          </div>

          <MagicLinkForm />
        </div>
      </main>
    </div>
  );
}
