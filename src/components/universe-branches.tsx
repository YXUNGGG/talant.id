import { useEffect, useState } from "react"
import type { QuestionType } from "@/lib/types&constants"
import { QuestionDialog } from "./question-dialog"

const ROOT_X = 400
const ROOT_Y = 100
const NODE_DISTANCE = 120
const NODE_RADIUS = 14
const ROOT_RADIUS = 14
const BEND_ANGLE = 12

type UniverseBranchesProps = {
  nodes: QuestionType[][]
  isStudent: boolean
  setActiveNode: (group: QuestionType[]) => void
}

export function UniverseBranches({
  nodes,
  setActiveNode,
  isStudent,
}: UniverseBranchesProps) {
  const [passedQuestionIds, setPassesQuestionIds] = useState<string[]>([])
  const [activeBranch, setActiveBranch] = useState<QuestionType[]>([])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (nodes.length) setActiveBranch(nodes[nodes.length - 1])
  }, [nodes])

  const getCoords = (
    branchIndex: number,
    totalBranches: number,
    targetDepth: number
  ) => {
    let baseAngleDeg = 90

    if (totalBranches > 1) {
      const startAngle = 135
      const endAngle = 45
      const step = (startAngle - endAngle) / (totalBranches - 1)
      baseAngleDeg = startAngle - branchIndex * step
    }

    let currentX = ROOT_X
    let currentY = ROOT_Y

    for (let d = 1; d <= targetDepth; d++) {
      const currentAngleDeg = baseAngleDeg + (d - 1) * BEND_ANGLE

      const angleRad = (currentAngleDeg * Math.PI) / 180

      currentX += Math.cos(angleRad) * NODE_DISTANCE
      currentY += Math.sin(angleRad) * NODE_DISTANCE
    }

    return { x: currentX, y: currentY }
  }

  return (
    <div className="flex size-full flex-col items-center gap-6 p-4">
      <div className="size-full overflow-hidden rounded-xl border border-purple-200">
        <svg
          viewBox="0 0 800 600"
          className="size-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {nodes.map((node, bIdx) => {
            return node.map((_, nIdx) => {
              const depth = nIdx + 1
              const currentCoords = getCoords(bIdx, nodes.length, depth)

              const parentCoords =
                depth === 1
                  ? { x: ROOT_X, y: ROOT_Y }
                  : getCoords(bIdx, nodes.length, depth - 1)

              return (
                <line
                  key={`line-${bIdx}-${nIdx}`}
                  x1={parentCoords.x}
                  y1={parentCoords.y}
                  x2={currentCoords.x}
                  y2={currentCoords.y}
                  stroke="#572b9e"
                  strokeWidth="1"
                />
              )
            })
          })}

          <circle
            cx={ROOT_X}
            cy={ROOT_Y}
            r={ROOT_RADIUS}
            fill="#a17af7"
            stroke="#572b9e"
            strokeWidth="1.5"
          />

          {nodes.map((node, bIdx) => {
            return node.map((question, nIdx) => {
              const depth = nIdx + 1
              const { x, y } = getCoords(bIdx, nodes.length, depth)

              const isActive = activeBranch?.[0]?.group === node[0].group

              const circle = (
                <circle
                  key={bIdx + nIdx}
                  cx={x}
                  cy={y}
                  r={NODE_RADIUS}
                  strokeWidth="1"
                  className="cursor-pointer"
                  stroke={isActive ? "#a17af7" : "transparent"}
                  fill={
                    passedQuestionIds.includes(question.id)
                      ? "#a17af7"
                      : "#f9f5ff"
                  }
                  onClick={() => {
                    setActiveNode(node)
                    setActiveBranch(node)
                  }}
                />
              )

              console.log(isStudent)

              return isStudent ? (
                <QuestionDialog
                  setPassed={() =>
                    setPassesQuestionIds((prev) => [...prev, question.id])
                  }
                  question={question}
                >
                  {circle}
                </QuestionDialog>
              ) : (
                circle
              )
            })
          })}
        </svg>
      </div>
    </div>
  )
}
