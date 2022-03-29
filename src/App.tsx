import heroAsset from '@/assets/hero.png'
import wavesAsset from '@/assets/waves.svg'
import Header from '@/components/Header'
import brands, { Brand } from '@/backend/brands'
import projects, { Project } from '@/backend/projects'

import { useEffect, useState } from 'react'
import Tooltip from 'react-tooltip'
import { FaMousePointer, FaQuestionCircle } from 'react-icons/fa'
import { BiRefresh } from 'react-icons/bi'
import { MdLockOutline, MdLockOpen } from 'react-icons/md'

type Role = 'developer'
type DeveloperProjectType = {
  backend: boolean
  frontend: boolean
  mobile: boolean
  fullstack: boolean
}

function App() {
  const [role, setRole] = useState<Role>('developer')
  const [developerProjectType, setDeveloperProjectType] =
    useState<DeveloperProjectType>({
      backend: true,
      frontend: true,
      mobile: true,
      fullstack: true,
    })
  const [loadedBrands, setLoadedBrands] = useState<Brand[]>([])
  const [loadedProjects, setLoadedProjects] = useState<Project[]>([])
  const [brandIndex, setBrandIndex] = useState(0)
  const [projectIndex, setProjectIndex] = useState(0)
  const [isBrandLocked, setIsBrandLocked] = useState(false)
  const [isProjectLocked, setIsProjectLocked] = useState(false)

  function nextBrand() {
    if (brandIndex === loadedBrands.length - 1) {
      return setBrandIndex(0)
    }

    setBrandIndex(brandIndex + 1)
  }

  function lockBrand() {
    setIsBrandLocked(true)
  }

  function unlockBrand() {
    setIsBrandLocked(false)
  }

  function nextProject() {
    if (projectIndex === loadedProjects.length - 1) {
      return setProjectIndex(0)
    }

    setProjectIndex(projectIndex + 1)
  }

  function lockProject() {
    setIsProjectLocked(true)
  }

  function unlockProject() {
    setIsProjectLocked(false)
  }

  function createNewChallenge() {
    if (!isProjectLocked) {
      nextProject()
    }

    if (!isBrandLocked) {
      nextBrand()
    }
  }

  const brand = loadedBrands[brandIndex] || {
    name: '',
  }
  const project = loadedProjects[projectIndex] || {
    name: '',
  }

  useEffect(() => {
    setLoadedProjects(projects.sort(() => Math.random() - 0.5))
    setLoadedBrands(brands.sort(() => Math.random() - 0.5))
  }, [])

  useEffect(() => {
    setLoadedProjects(
      projects.filter(project => {
        if (developerProjectType.backend && project.techs.includes('backend')) {
          return true
        }

        if (
          developerProjectType.frontend &&
          project.techs.includes('frontend')
        ) {
          return true
        }

        if (developerProjectType.mobile && project.techs.includes('mobile')) {
          return true
        }

        if (
          developerProjectType.fullstack &&
          project.techs.includes('fullstack')
        ) {
          return true
        }

        return false
      })
    )
  }, [developerProjectType])

  return (
    <>
      <Header />

      <div className="w-full">
        <div className="container mx-auto">
          <div className="w-full flex items-end">
            <div className="flex flex-col mb-[32px]">
              <span className="text-5xl font-black leading-[56px]">
                Transforme-se em um{' '}
                <span className="text-primary-100">mestre</span>
                <br />
                através de <span className="text-primary-100">desafios</span>
              </span>

              <div className="mt-6">
                <p className="text-gray-100 text-2xl">
                  O{' '}
                  <span className="text-dark-100 uppercase font-bold">
                    Project<span className="text-primary-100">.</span>B
                  </span>{' '}
                  te ajuda a melhorar suas habilidades com <br />
                  desafios da sua área.
                </p>
              </div>

              <div className="mt-8 flex">
                <a
                  href="#create-challenge"
                  className="px-8 h-[54px] flex items-center justify-center bg-gradient-to-tr from-primary-100 to-primary-200 rounded-[4px] text-white font-medium text-xl active:translate-y-1"
                >
                  Gerar desafio
                </a>

                {/* <a
                  href="#choose-challenge"
                  className="px-8 h-[54px] border-[1px] ml-4 flex items-center justify-center bg-transparent border-primary-100 rounded-[4px] text-primary-100 font-medium text-xl active:translate-y-1"
                >
                  Escolher meu desafio
                </a> */}
              </div>
            </div>

            <img
              className="ml-auto"
              src={heroAsset}
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-16 bg-primary-200 pb-32">
        <img
          className="w-full mb-8"
          src={wavesAsset}
        />

        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="font-black text-white flex items-center">
                Selecione uma função
                <FaQuestionCircle
                  data-tip="Selecione qual a sua função (por enquanto, apenas desenvolvedores)"
                  data-for="role-tooltip"
                  className="ml-2"
                />
                <Tooltip
                  id="role-tooltip"
                  effect="solid"
                />
              </span>

              <div className="mt-1 flex">
                <button
                  className={`w-52 h-12 text-xl font-bold rounded-[4px] ${
                    role === 'developer'
                      ? 'bg-primary-300 text-white'
                      : 'bg-white text-primary-200'
                  }`}
                  onClick={() => setRole('developer')}
                >
                  Desenvolvedor
                </button>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <span className="font-black text-white flex items-center">
                Selecione o tipo de projeto
                <FaQuestionCircle
                  data-tip="Escolha para qual o tipo de plataforma que você deseja desenvolver"
                  data-for="project-type-tooltip"
                  className="ml-2"
                />
                <Tooltip
                  id="project-type-tooltip"
                  effect="solid"
                />
              </span>

              <div className="mt-1 flex">
                <button
                  className={`w-52 h-12 text-xl font-bold rounded-l-[4px] ${
                    developerProjectType.backend
                      ? 'bg-primary-300 text-white'
                      : 'bg-white text-primary-200'
                  }`}
                  onClick={() =>
                    setDeveloperProjectType({
                      ...developerProjectType,
                      backend: !developerProjectType.backend,
                    })
                  }
                >
                  Backend
                </button>

                <button
                  className={`w-52 h-12 text-xl font-bold ${
                    developerProjectType.frontend
                      ? 'bg-primary-300 text-white'
                      : 'bg-white text-primary-200'
                  }`}
                  onClick={() =>
                    setDeveloperProjectType({
                      ...developerProjectType,
                      frontend: !developerProjectType.frontend,
                    })
                  }
                >
                  Frontend
                </button>

                <button
                  className={`w-52 h-12 text-xl font-bold ${
                    developerProjectType.mobile
                      ? 'bg-primary-300 text-white'
                      : 'bg-white text-primary-200'
                  }`}
                  onClick={() =>
                    setDeveloperProjectType({
                      ...developerProjectType,
                      mobile: !developerProjectType.mobile,
                    })
                  }
                >
                  Mobile
                </button>

                <button
                  className={`w-52 h-12 text-xl font-bold rounded-r-[4px] ${
                    developerProjectType.fullstack
                      ? 'bg-primary-300 text-white'
                      : 'bg-white text-primary-200'
                  }`}
                  onClick={() =>
                    setDeveloperProjectType({
                      ...developerProjectType,
                      fullstack: !developerProjectType.fullstack,
                    })
                  }
                >
                  Fullstack
                </button>
              </div>
            </div>

            <div className="flex mt-6">
              <button
                id="create-challenge"
                className="h-14 px-8 text-xl text-primary-200 bg-white font-semibold rounded-[4px] flex items-center justify-center active:translate-y-1"
                onClick={createNewChallenge}
              >
                <BiRefresh
                  size={32}
                  className="mr-2"
                />
                Novo desafio
              </button>

              {/* <button className="ml-4 h-14 px-8 text-xl text-primary-200 bg-white font-semibold rounded-[4px] flex items-center justify-center active:translate-y-1">
                <FaMousePointer
                  size={20}
                  className="mr-2"
                />
                Escolher meu desafio
              </button> */}
            </div>

            <div className="flex items-center mt-7 font-black text-[64px] text-dark-100">
              <span>
                Crie um(a) <span className="text-white">{project.name}</span>
              </span>

              {isProjectLocked ? (
                <MdLockOutline
                  size={32}
                  className="ml-4 fill-white cursor-pointer"
                  onClick={unlockProject}
                />
              ) : (
                <MdLockOpen
                  size={32}
                  className="ml-4 fill-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-75"
                  onClick={lockProject}
                />
              )}
            </div>

            <div className="flex items-center font-black text-[64px] text-dark-100">
              <span>
                Para <span className="text-white">{brand.name}</span>
              </span>

              {isBrandLocked ? (
                <MdLockOutline
                  size={32}
                  className="ml-4 fill-white cursor-pointer"
                  onClick={unlockBrand}
                />
              ) : (
                <MdLockOpen
                  size={32}
                  className="ml-4 fill-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-75"
                  onClick={lockBrand}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
