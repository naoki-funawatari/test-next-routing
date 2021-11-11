import { useParams } from "@/hooks/useParams";
import Team from "@/features/racing/Team";
import Driver from "@/features/racing/Driver";
import teams from "@/assets/data/teams.json";

const Main = () => {
  const { teamId, driverId } = useParams();
  const team = teams.find(o => o.teamId === Number(teamId));
  const driver = team && team.drivers.find(o => o.driverId === Number(driverId));

  return (
    <main>
      {team && <Team {...{ team }} />}
      {driver && (
        <>
          <hr />
          <Driver {...{ driver }} />
        </>
      )}
    </main>
  );
};

export default Main;
