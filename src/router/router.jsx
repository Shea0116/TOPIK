import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Layout from '@/views/Layout/Layout'
import Home from '@/views/Layout/SonViews/Home'

// 使用懒加载导入其他页面组件
const Grammer = lazy(() => import('@/views/Layout/SonViews/Grammer'));
const Words = lazy(() => import('@/views/Layout/SonViews/Words'));
const Write = lazy(() => import('@/views/Layout/SonViews/Write'));
const Listen = lazy(() => import('@/views/Layout/SonViews/Listen'));
const Speak = lazy(() => import('@/views/Layout/SonViews/Speak'));
const Read = lazy(() => import('@/views/Layout/SonViews/Read'));

const RouterMain = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="grammer" element={<Grammer />} />
            <Route path="words" element={<Words />} />
            <Route path="write" element={<Write />} />
            <Route path="listen" element={<Listen />} />
            <Route path="speak" element={<Speak />} />
            <Route path="read" element={<Read />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default RouterMain