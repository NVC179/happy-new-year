"use client";

import React, { useState, useEffect } from 'react';

export default function TetCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const teamPhotos = [
    // Thêm URL ảnh của bạn vào đây
    { id: 1, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', name: 'Nguyễn Văn A', position: { top: '10%', left: '5%', rotate: -5 } },
    { id: 2, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', name: 'Trần Thị B', position: { top: '15%', right: '8%', rotate: 8 } },
    { id: 3, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', name: 'Lê Văn C', position: { top: '45%', left: '3%', rotate: -8 } },
    { id: 4, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', name: 'Phạm Thị D', position: { top: '50%', right: '5%', rotate: 6 } },
    { id: 5, url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400', name: 'Hoàng Văn E', position: { bottom: '15%', left: '10%', rotate: 5 } },
    { id: 6, url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400', name: 'Vũ Thị F', position: { bottom: '20%', right: '12%', rotate: -6 } },
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Tết Nguyên Đán 2026: 17/02/2026 (bạn có thể thay đổi ngày này)
      const tetDate = new Date('2026-02-17T00:00:00');
      const now = new Date();
      const difference = tetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-yellow-600">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-orange-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 left-5 text-6xl animate-bounce" style={{animationDelay: '0s'}}>🎋</div>
        <div className="absolute top-20 right-10 text-6xl animate-bounce" style={{animationDelay: '1s'}}>🏮</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-bounce" style={{animationDelay: '2s'}}>🧧</div>
        <div className="absolute bottom-10 right-1/4 text-6xl animate-bounce" style={{animationDelay: '1.5s'}}>🎊</div>
      </div>


      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 mb-4 drop-shadow-2xl" style={{fontFamily: 'serif'}}>
            CHÚC MỪNG NĂM MỚI
          </h1>
          <p className="text-3xl md:text-4xl text-white font-semibold drop-shadow-lg">
            TẾT NGUYÊN ĐÁN 2026
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w mx-auto mb-16">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
            <div className="text-center">
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg tracking-wider">
                {String(timeLeft.days).padStart(2, '0')} ngày : {String(timeLeft.hours).padStart(2, '0')} giờ : {String(timeLeft.minutes).padStart(2, '0')} phút : {String(timeLeft.seconds).padStart(2, '0')} giây
              </div>
              <div className="text-xl md:text-2xl text-yellow-200 mt-4 font-semibold drop-shadow-md">
                Còn lại đến Tết Nguyên Đán 🎊
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-white py-6 px-8 rounded-2xl shadow-2xl inline-block mb-8">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              🎉 CHÚC MỪNG NĂM MỚI 🎉
            </p>
            <p className="text-lg md:text-xl">
              Vạn sự như ý - An khang thịnh vượng
            </p>
          </div>
          
          {/* Team Name */}
          <div className="mt-8">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-yellow-300 drop-shadow-2xl animate-pulse">
              TEAM KTT QNN
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce {
          animation: bounce 3s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}