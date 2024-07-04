import { Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'

// const authenticateBodySchema = z.object({
//   email: z.string().email(),
//   password: z.string(),
// })

// type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user)
  }
}
