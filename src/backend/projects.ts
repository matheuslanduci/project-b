type Tech = 'backend' | 'frontend' | 'mobile' | 'fullstack'

export type Project = {
  id: number
  name: string
  techs: Tech[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Bloco de Notas',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 2,
    name: 'Sistema de Estoque',
    techs: ['backend', 'fullstack', 'mobile', 'frontend'],
  },
  {
    id: 3,
    name: 'Calculadora',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 4,
    name: 'Landing Page',
    techs: ['frontend'],
  },
  {
    id: 5,
    name: 'Blog',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 6,
    name: 'Carrinho de Compras',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 7,
    name: 'Chat',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 8,
    name: 'Controle de Usuários',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 9,
    name: 'Página de Perfil',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 10,
    name: 'Loja Virtual',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 11,
    name: 'Página de Login',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 12,
    name: 'Todo List',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 13,
    name: 'Sistema de Reservas',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 14,
    name: 'Calendário',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 15,
    name: 'UI Kit',
    techs: ['frontend', 'mobile'],
  },
  {
    id: 16,
    name: 'Painel de Controle de serviços de hospedagem',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 17,
    name: 'Dashboard financeiro',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 18,
    name: 'Agenda',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 19,
    name: 'Gerador de relatórios',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
  {
    id: 20,
    name: 'Sistema de Notificações',
    techs: ['frontend', 'mobile', 'backend', 'fullstack'],
  },
]

export default projects
