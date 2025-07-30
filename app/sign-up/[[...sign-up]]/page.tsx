import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <SignUp afterSignUpUrl={'/sign-in'} />
    </div>
  )
}