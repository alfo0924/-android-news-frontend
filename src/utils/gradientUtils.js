/**
 * 計算漸層背景顏色
 * @param {number} mouseX - 滑鼠X座標
 * @param {number} mouseY - 滑鼠Y座標
 * @param {number} windowWidth - 視窗寬度
 * @param {number} windowHeight - 視窗高度
 * @returns {string} CSS漸層字符串
 */
export const calculateGradient = (mouseX, mouseY, windowWidth, windowHeight) => {
    // 將滑鼠位置轉換為相對百分比
    const xPercent = Math.round((mouseX / windowWidth) * 100)
    const yPercent = Math.round((mouseY / windowHeight) * 100)

    // 根據滑鼠位置調整顏色
    const hue1 = (xPercent * 1.2) % 360 // 第一個顏色的色相
    const hue2 = (yPercent * 1.8) % 360 // 第二個顏色的色相

    // 使用HSL顏色模型，保持飽和度和亮度固定
    const color1 = `hsl(${hue1}, 70%, 65%)`
    const color2 = `hsl(${hue2}, 80%, 60%)`

    // 創建漸層角度，基於滑鼠位置
    const angle = Math.round((xPercent + yPercent) / 2 * 3.6)

    // 返回CSS漸層字符串
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`
}

/**
 * 創建波浪效果
 * @param {number} mouseX - 滑鼠X座標
 * @param {number} mouseY - 滑鼠Y座標
 * @returns {string} 波浪效果的CSS transform字符串
 */
export const createWaveEffect = (mouseX, mouseY) => {
    const moveX = (mouseX - window.innerWidth / 2) / 50
    const moveY = (mouseY - window.innerHeight / 2) / 50

    return `translate(${moveX}px, ${moveY}px)`
}

export default {
    calculateGradient,
    createWaveEffect
}
