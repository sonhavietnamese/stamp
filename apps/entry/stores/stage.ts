import { create } from 'zustand'
import { Stage } from '@/types'

interface StageStore {
  stage: Stage
  setStage: (stage: Stage) => void
}

export const useStageStore = create<StageStore>()((set) => ({
  stage: 'home',
  setStage: (stage) => set({ stage }),
}))
