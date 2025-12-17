import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // In a real app, you would validate credentials here.
    // For this demo, we immediately log the user in.
    onLogin();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto shadow-none sm:shadow-xl bg-background-light dark:bg-background-dark">
      {/* Hero / Brand Section */}
      <div className="relative w-full h-[280px] rounded-b-xl overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          data-alt="Luxurious modern hotel bedroom interior with warm ambient lighting"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6C7WKOk9WjEQOCgkOGf3pRERKXa9wZf61engLmP7qvSScP9om-l77bjGaBdOrqoOxqqTeDLuTpC4266k9oujC9b4WN3Qq4eZ0z_wK08DDrpOpQ_C-vqAoD7GYJiVApjVG56GCtGLrE5NUZFj3wC3H_OPSW778JE7jxtzBGlYGFjucVA3SET8tVMRAYuGFFtvQ2_Qj36CJL4Z6xw5yYF2_xdh47k7Gor7P7ROHPEk01v7EQwCOQtTorm7Hf3ZA99fFN9UpfaHnQRs')",
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/40 to-transparent dark:from-background-dark dark:via-background-dark/40"></div>
        {/* Logo & Headline Area */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-6 flex flex-col items-center text-center">
          <div className="mb-2 bg-primary/90 text-[#1c1c0d] backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
            TheOneStar Residence
          </div>
          <h1 className="text-[#1c1c0d] dark:text-white text-3xl font-bold leading-tight tracking-tight drop-shadow-sm">
            Sua estadia perfeita
            <br />
            começa aqui.
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col px-6 pt-6 pb-8 gap-6">
        {/* Welcome Text */}
        <div className="text-center">
          <h2 className="text-[#1c1c0d] dark:text-white text-xl font-semibold mb-1">
            Bem-vindo de volta
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Faça login para gerenciar sua reserva.
          </p>
        </div>

        {/* Promo Banner */}
        <div className="bg-primary/10 border border-primary/40 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
          <div className="bg-primary text-[#1c1c0d] rounded-full p-1.5 shrink-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">bolt</span>
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#1c1c0d] dark:text-white">
              Promoção Relâmpago
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
              1 hora em suíte normal com preço especial! Oferta por tempo
              limitado.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#1c1c0d] dark:text-gray-200 ml-2">
              Email
            </label>
            <div className="relative">
              <input
                className="w-full h-14 bg-white dark:bg-[#2f2f1a] border border-[#e9e9ce] dark:border-[#444422] rounded-full px-6 text-base text-[#1c1c0d] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                placeholder="seu@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#1c1c0d] dark:text-gray-200 ml-2">
              Senha
            </label>
            <div className="relative">
              <input
                className="w-full h-14 bg-white dark:bg-[#2f2f1a] border border-[#e9e9ce] dark:border-[#444422] rounded-full px-6 pr-12 text-base text-[#1c1c0d] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                placeholder="********"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end pr-2">
            <a
              className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              Esqueci minha senha
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            <button
              className="w-full h-14 bg-primary hover:bg-yellow-300 text-[#1c1c0d] font-bold rounded-full shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              type="submit"
            >
              Entrar
            </button>
            <button
              className="w-full h-14 bg-transparent border-2 border-[#e9e9ce] dark:border-[#444422] text-[#1c1c0d] dark:text-white font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-[#2f2f1a] transition-all flex items-center justify-center"
              type="button"
            >
              Criar nova conta
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-auto pt-6 flex flex-col items-center text-center gap-6 border-t border-gray-100 dark:border-gray-800">
          {/* Rules */}
          <div className="text-[11px] leading-tight text-gray-400 dark:text-gray-500 max-w-[280px]">
            <p className="mb-1">
              <strong className="text-gray-600 dark:text-gray-400">
                Regras:
              </strong>{' '}
              Reservas disponíveis apenas a partir das 21h.
            </p>
            <p>Aplicável taxa extra para mais de 2 pessoas por quarto.</p>
          </div>

          {/* WhatsApp Support */}
          <a
            className="group flex items-center gap-3 px-5 py-2 rounded-full bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            href="#"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[18px]">
                chat
              </span>
            </span>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                Precisa de ajuda?
              </span>
              <span className="text-sm font-bold text-[#1c1c0d] dark:text-white">
                Falar no WhatsApp
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};