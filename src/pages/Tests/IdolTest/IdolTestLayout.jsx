import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';

const IdolTestLayout = () => {
    const [memo, setMemo] = useState("");

  return (
    <div>
      <Header />
      <Outlet context={{memo, setMemo}}/> {/* 여기에 하위 라우트 컴포넌트가 렌더링 됩니다 */}
    </div>
  );
};

export default IdolTestLayout;
