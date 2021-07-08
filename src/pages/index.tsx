import { SafeEnvironment } from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import { PageTitle } from 'ui/components/data-display/PageTitle/PageTitle';
import { UserInformation } from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      {/* <SafeEnvironment />
      <PageTitle title="Conheça os profissionais" subtitle="asdasd" /> */}
      <UserInformation description="Desc" name="Teste" picture="" rating={3} />
    </div>
  );
}
